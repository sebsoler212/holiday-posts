// app/api/stripe-webhook/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_WEBHOOK_SECRET!);

export async function POST(request: Request) {
  // Retrieve the Stripe signature from the headers
  const signature = request.headers.get('stripe-signature');
  // Get the raw text body of the request
  const buf = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      buf,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if(!session.client_reference_id) {
        return new NextResponse(`No Client Reference ID`, { status: 400 });
    }

    console.log(session)

    console.log(session.client_reference_id) //UC UUID Photo Used

    console.log(session.customer_details?.email) //Email Address

    console.log(session.discounts?.[0]?.promotion_code) //Promotion Code API ID... need to map it to holiday theme
    // if(promo_1RLsP4GpyEU7NO0rLwA4S9md) then Christmas etc... 

    //TODO: IMAGE API CALL

    //TODO: UploadCare Upload

    //TODO: Mailgun email images to user

  } // end event.type checkout session complete
  
  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}

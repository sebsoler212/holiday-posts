const reviews = [
    { name: 'Jane D.', text: 'Absolutely loved our Christmas card!' },
    { name: 'Mark T.', text: 'Thanksgiving photo turned out amazing.' }
    // …more reviews
  ]
  
  export default function ReviewsWall() {
    return (
      <div className='space-y-4'>
        {reviews.map(r => (
          <div key={r.name} className='p-4 bg-white rounded shadow'>
            <strong>{r.name}</strong>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    )
  }
  
import { useTheme } from "./ThemeProvider"

interface TryProps {
    tryNow: () => void
}

export default function TryNow({ tryNow }: TryProps) {
    const { theme } = useTheme()

    return (
        <div className="text-center">
            <h2 className={`${theme.colors.accent} text-2xl font-bold mb-4 px-4`}>
                Get your Holiday Posts in 3 easy steps
            </h2>
            <button
                onClick={tryNow}
                className={`
                    ${theme.colors.buttonBg}
                    ${theme.colors.buttonText}
                    ${theme.colors.buttonHover}
                    px-6 py-3 rounded-lg transition w-full lg:w-80
                  `}
                >
                Try it now!
            </button>
        </div>
    )
}
  
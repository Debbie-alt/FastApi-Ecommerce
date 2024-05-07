import ThemeProvider from "./ThemeProvider" 

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider
         attribute="class"
         defaultTheme="light"
         enableSystem
         enablTransitionOnChange
        
        >{children}</ThemeProvider>
      </body>
    </html>
  )
}
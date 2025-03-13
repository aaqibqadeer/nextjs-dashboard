import '@/app/ui/global.css'
import { inter } from './ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {console.log({ inter })}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

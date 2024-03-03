import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className='flex-1'>{children}</main>
    </div>
  )
}
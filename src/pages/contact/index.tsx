import Link from 'next/link';
import { MainLayout } from '../../../components/layouts/MainLayout';



export default function ContactPage() {
  return (
    <MainLayout>
        <h1>Contact Page</h1>
        <div className={"description"}>
          <h1>Ir al
            <Link href="/">Home</Link>
          </h1>
        </div>
    </MainLayout>
  )
}

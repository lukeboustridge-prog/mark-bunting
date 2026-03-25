import { redirect } from 'next/navigation';
import { login } from '@/lib/auth';

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get('password') as string;

  const success = await login(password || '');

  if (success) {
    redirect('/admin');
  } else {
    redirect('/admin?error=invalid');
  }
}

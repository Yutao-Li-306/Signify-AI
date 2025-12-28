'use client';

import { useAuth } from '@/hooks/useAuth';
import { signOut } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';

export function AuthButton() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Button disabled>Loading...</Button>;
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {user.name || user.email}
        </span>
        <Button onClick={() => signOut()} variant="outline">
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button asChild>
      <a href="/auth/signin">Sign In</a>
    </Button>
  );
}

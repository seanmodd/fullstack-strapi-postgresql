import { useSession } from 'next-auth/client';
import { Heading, VStack } from '@chakra-ui/react';

export default function Home() {
  const [session] = useSession();
  return (
    <VStack pt="50px">
      <Heading>
        {session ? `${session.user.name}, ` : ''}
        Welcome to
        <a href="https://nextjs.org">Next.js!</a>
      </Heading>
    </VStack>
  );
}

import { useSession } from 'next-auth/client';
import { Heading, VStack, Text } from '@chakra-ui/react';

export default function Home() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <VStack pt="50px">
      <Heading>
        {session ? `${session.user.name}, ` : ''}Welcome to{' '}
        <a href="https://nextjs.org">Next.js!</a>
      </Heading>
    </VStack>
  );
}

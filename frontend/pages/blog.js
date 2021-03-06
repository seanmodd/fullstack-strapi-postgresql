import { useState, useEffect } from 'react';
import { getSession, useSession, signIn } from 'next-auth/client';
import { VStack, Heading } from '@chakra-ui/react';

function Blog({ data }) {
  const [loading, setLoading] = useState(true);
  const [session] = useSession();
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return (
      <VStack pt="50px">
        <Heading className="title">Loading...</Heading>
      </VStack>
    );
  }

  return (
    <VStack pt="50px">
      <Heading className="title" pb="20px">
        Blog Page!
      </Heading>
      <Heading fontSize="2xl">{data}</Heading>
      <Heading fontSize="2xl">Owner: {session.user.name}</Heading>
    </VStack>
  );
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: 'List of 100 Blog Titles',
      session,
    },
  };
}

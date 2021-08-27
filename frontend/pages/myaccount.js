import { useState, useEffect } from 'react';
import {Heading, VStack} from "@chakra-ui/react"
import { getSession, signIn, useSession } from 'next-auth/client';



function MyAccount() {
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
        My Account Page!
      </Heading>
      <Heading fontSize="2xl">Owner: {session.user.name}</Heading>
    </VStack>
  );
}
export default MyAccount;
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

import * as moment from 'moment';
// import moment from 'moment';
import { Heading, VStack, Text, Stack, HStack } from '@chakra-ui/react';

export default function Home({ posts }) {
  const day = new Date(2011, 9, 16);
  const dayWrapper = moment(day);
  console.log(dayWrapper._i);
  console.log(dayWrapper.format('dddd, MMMM Do YYYY'));

  return (
    <VStack pt="25px">
      <h1 style={{ fontSize: '2.8em', textDecoration: 'underline' }}>
        Strapi Blog Posts
      </h1>
      <Stack w="45%" pt="30px" spacing="20px">
        {posts &&
          posts.map((post) => (
            <Stack
              borderRadius="10px"
              justify="center"
              textAlign="center"
              borderWidth="3px"
              py="15px"
              px="10px"
              key={post.id}
            >
              <Heading
                mb="10px"
                letterSpacing="2.5px"
                textTransform="uppercase"
              >
                {post.Title}
              </Heading>
              <HStack
                pt="20px"
                spacing="20%"
                fontWeight="semibold"
                justify="center"
              >
                <Stack spacing="0px">
                  <p>posted by: </p>
                  <p>{post.User.username}</p>
                </Stack>
                <Stack spacing="0px">
                  <p>date published:</p>
                  <p>{moment(post.published_at).format('MMM Do YY')}</p>
                </Stack>
                <Stack spacing="0px">
                  <p>last updated: </p>
                  <p> {moment(post.updated_at).format('MMM Do YY')}</p>
                </Stack>
              </HStack>
            </Stack>
          ))}
      </Stack>
    </VStack>
  );
}

export async function getStaticProps() {
  // ! get post from Strapi API
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();
  console.log(posts);
  return {
    props: { posts },
  };
}

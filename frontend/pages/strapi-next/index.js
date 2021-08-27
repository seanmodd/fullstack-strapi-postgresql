import * as moment from 'moment';
// import moment from 'moment';
import { Heading, VStack, Text, Stack, HStack } from '@chakra-ui/react';
import Post from 'components/Post';

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
            <Post
              postId={post.id}
              postUsername={post.User.username}
              postTitle={post.Title}
              postUpdated={post.updated_at}
              postPublished={post.published_at}
            />
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

import * as moment from 'moment';
import Link from 'next/link';
// import moment from 'moment';
import { Heading, useColorMode, Stack, HStack } from '@chakra-ui/react';

export default function Post({
  postId,
  postUsername,
  postTitle,
  postPublished,
  postSlug,
  postUpdated,
}) {
  const day = new Date(2011, 9, 16);
  const dayWrapper = moment(day);
  console.log(dayWrapper._i);
  console.log(dayWrapper.format('dddd, MMMM Do YYYY'));

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      borderRadius="10px"
      justify="center"
      textAlign="center"
      borderWidth="3px"
      py="15px"
      px="10px"
      key={postId}
    >
      <Link href={`/strapi-next/${postSlug}`}>
        <Heading
          _hover={{
            color: colorMode === 'dark' ? '#ff00ea' : '#ff00ea',
            transition: 'all 0.2s ease-in-out',
          }}
          mb="10px"
          transition="all 0.2s ease-in-out"
          cursor="pointer"
          letterSpacing="2.5px"
          textTransform="uppercase"
        >
          {postTitle}
        </Heading>
      </Link>
      <HStack pt="20px" spacing="20%" fontWeight="semibold" justify="center">
        <Stack spacing="0px">
          <p>posted by: </p>
          <p>{postUsername}</p>
        </Stack>
        <Stack spacing="0px">
          <p>date published:</p>
          <p>{moment(postPublished).format('MMM Do YY')}</p>
        </Stack>
        <Stack spacing="0px">
          <p>last updated: </p>
          <p> {moment(postUpdated).format('MMM Do YY')}</p>
        </Stack>
      </HStack>
    </Stack>
  );
}

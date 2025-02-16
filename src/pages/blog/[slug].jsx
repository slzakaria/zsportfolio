import { Helmet, HelmetProvider } from 'react-helmet-async';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { BlogPost } from '@/components/blog/BlogPost';
import siteData from '@/data/siteData';
import { calculateReadingTime } from '@/utils/readingTime';

export default function Post({ source, frontMatter }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${frontMatter.title} | ${siteData.main.offTitle}`}</title>
        <meta name='description' content={frontMatter.excerpt} />
        <meta name='keywords' content={frontMatter.tags.join(', ')} />
      </Helmet>
      <BlogPost frontMatter={frontMatter}>
        <MDXRemote {...source} />
      </BlogPost>
    </HelmetProvider>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src', 'content', 'blog'));
  console.log('Available blog files:', files); // Debug log

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }));

  console.log('Generated paths:', paths); // Debug log

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('src', 'content', 'blog', `${slug}.mdx`),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  // Calculate reading time from content
  const readingTime = calculateReadingTime(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        ...frontMatter,
        readingTime // This will override any manually set readingTime in frontmatter
      }
    }
  };
}
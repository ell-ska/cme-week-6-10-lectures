import { notFound } from 'next/navigation'

import { getPost } from '@/lib/queries'
import { auth } from '@/lib/auth'

export const revalidate = 60 * 15 // 15 min

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const post = await getPost(id)

  if (!post) {
    return notFound()
  }

  const user = await auth.getUser()
  const isAuthor = user && user.id === post.author.id

  return (
    <main className='main'>
      <article className='space-y-4'>
        <header className='flex items-start justify-between'>
          <div className='space-y-1'>
            <span className='text-zinc-600'>{post.author.username}</span>
            <h1 className='text-2xl font-bold'>{post.title}</h1>
          </div>
          {isAuthor && <button className='button-secondary'>delete</button>}
        </header>
        <p>{post.content}</p>
      </article>
    </main>
  )
}

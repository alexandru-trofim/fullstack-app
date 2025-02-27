import { initTRPC } from '@trpc/server'

const ideas = [
    { nick: 'cool-idea-1', name: 'Idea Name 1', description: 'Idea Description 1...' },
    { nick: 'cool-idea-2', name: 'Idea Name 2', description: 'Idea Description 2...' },
    { nick: 'cool-idea-3', name: 'Idea Name 3', description: 'Idea Description 3...' },
    { nick: 'cool-idea-4', name: 'Idea Name 4', description: 'Idea Description 4...' },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
    ideas: trpc.procedure.query(() => {
        return { ideas }
    }),
})

export type TrpcRouter = typeof trpcRouter

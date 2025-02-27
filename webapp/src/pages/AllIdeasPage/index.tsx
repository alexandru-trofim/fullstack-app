import { trpc } from '../../libs/trpc'

export const AllIdeasPage = () => {
    const { data, error, isLoading, isFetching, isError } = trpc.ideas.useQuery()

    if (isLoading) {
        return <span>is Loading...</span>
    }

    if (isError) {
        return <span>is Error: {error.message} </span>
    }

    return (
        <div>
            <h1>Hello World!!!</h1>
            {data.ideas.map((idea) => {
                return (
                    <div key={idea.name}>
                        <h2> {idea.name} </h2>
                        <p> {idea.description} </p>
                    </div>
                )
            })}
        </div>
    )
}

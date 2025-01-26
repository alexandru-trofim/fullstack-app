export const App = () => {
    const ideas = [
        { nick: 'cool-idea-1', name: 'Idea Name 1', description: 'Idea Description 1...' },
        { nick: 'cool-idea-2', name: 'Idea Name 2', description: 'Idea Description 2...' },
        { nick: 'cool-idea-3', name: 'Idea Name 3', description: 'Idea Description 3...' },
        { nick: 'cool-idea-4', name: 'Idea Name 4', description: 'Idea Description 4...' },
    ]

    return (
        <div>
            <h1>Hello World!!!</h1>
            {ideas.map((idea) => {
                return (
                    <div key={idea.nick}>
                        <h2> {idea.name} </h2>
                        <p> {idea.description} </p>
                    </div>
                )
            })}
        </div>
    )
}

import useDataFetching from "../../components/hooks/useDataFetching";
import Task from "../../components/Task/Task";

const Backlog = () => {
    const [loading, error, tasks] = useDataFetching(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-second-Edition/tasks`);

  return(
    <div className='Backlog-wrapper'>
        <h2>Backlog</h2>
        <div className='Tasks-wrapper'>
            {
                loading || error
                ? <span>{error || 'Loading...'}</span>
                    : (
                        tasks.map(task => (
                            <Task
                            key={task.id}
                            title={task.title}
                            body={task.body}
                            />
                        ))
                    )
            }
        </div>
    </div>
  )
}

export default Backlog;
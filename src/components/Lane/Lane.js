import './Lane.css';
import Task from "../Task/Task";

function Lane({ title, loading, tasks, error }) {
  return (
    <div className='Lane-wrapper'>
      <h2>{title}</h2>
        {
            loading || error
            ? <span>{error || 'Loading...'}</span>
                : (
                    tasks.map(task => (
                        <div>
                            <Task
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                body={task.body}
                            />
                        </div>
                    ))
                )
        }
    </div>
  );
}

export default Lane;
import './Lane.css';
import Task from "../Task/Task";

function Lane({ title, loading, tasks, error, onDragStart, onDragOver, onDrop, laneId }) {
  return (
    <div
        className='Lane-wrapper'
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, laneId)}
    >
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
                                onDragStart={onDragStart}
                            />
                        </div>
                    ))
                )
        }
    </div>
  );
}

export default Lane;

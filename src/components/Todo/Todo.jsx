import s from './Todo.module.scss';
import classnames from 'classnames'
export const Todo = ({ item, removeTodoItem, doneTodoItem }) => {
    return (
        <>
            <div className={classnames(s.todoItem, (item.isDone) ? `${s.todoIsDone}` : `${s.todoIsntDone}`) }>
                {/* <p>ID Todo: {item.id}</p> */}
                <p>Task: {item.text}</p>
                <button
                    onClick={() => {
                        removeTodoItem(item);
                    }}
                >
                    Remove
                </button>
                {!item.isDone && (
                    <button
                        onClick={() => {
                            doneTodoItem(item);
                        }}
                    >
                        Done!
                    </button>
                )}
            </div>
        </>
    );
};

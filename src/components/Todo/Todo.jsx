export const Todo = ({ item, removeTodoItem, doneTodoItem }) => {
    return (
        <>
            <div>
                <p>ID Todo: {item.id}</p>
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

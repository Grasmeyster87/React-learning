
export const buttonStyle = { backgroundColor: 'lightgreen' }

export function Reset({ count, onClick }) {
    return count > 0 && (
        <div>
            <button style={buttonStyle} onClick={onClick}>
                Reset
            </button>
        </div>
    )

}


export default function DivTable({ topbar, footer, body }){
    return (
        <div className="card-inner-group">
            {topbar}
            <div className="card-inner p-0">
                {body}
            </div>
            <div className="card-inner">
                {footer}
            </div>
        </div>
    );
}
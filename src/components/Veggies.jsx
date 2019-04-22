import React from 'react';

function Veggies(props) {
  return (
    <div>
      <section>
        <h1>{props.month}</h1>
          {props.selection.map((a, index) =>
            <p key={index}>{a}</p>
        )}
      </section>
      <style jsx>{`
        div{
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          text-align: center;
          padding: 5px;
        }
        section{
          border: 1px solid gray;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
        }
        h1{
          padding: 3px;
          background-color: gray;
          border-top-right-radius: 9px;
          border-top-left-radius: 9px;
        }
        p{
          padding: 1px 3px;
        }
      `}</style>
    </div>

  );
}

export default Veggies;

export default function Cards({arr}) {
    console.log(arr); // 👉️ 
    return (
      <div style={{display: 'flex', columnGap: '16px', textAlign: 'center', flexWrap: 'wrap', justifyContent: 'center'}}>
        {arr.map(obj => {
          return <div 
            style={{display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', border: '1px solid #EAEAEA', borderRadius: '8px', padding: '24px 16px', minWidth: '240px', marginTop: '16px',}} 
            key={obj.title}>
                {obj.icon}
                <p style={{paddingTop: '4px'}}>{obj.title}</p>
            </div>;
        })}
      </div>
    );
}
  
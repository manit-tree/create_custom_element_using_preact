export function HTML(props) { 
  let {children} = props;

  console.log(props);

  return (
    <div dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />
  )
}

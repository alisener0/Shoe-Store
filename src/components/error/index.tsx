
type Props = {
  info:string,
}

const Error = ({info}:Props) => {
  return (
    <div className="my-20 text-center">
      <p>Üzgünüz hata oluştu</p>
      <p>{info}</p>
    </div>
  )
}

export default Error
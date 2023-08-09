

export const RankTable = ({  id, title, floor, total, image }) => {
``
  return (
    <tr className='text-center font-bold '>
      <th scope="row" className='text-start' >
        {id}
      </th>
      <td className="">
        <img src={image} className='h-1[72px] w-[72px] rounded-xl border-slate-300 border' />
      </td>
      <td className='text-start'>{title}</td>
      <td>{floor}</td>
      <td>{total}</td>
    </tr>
  )
}
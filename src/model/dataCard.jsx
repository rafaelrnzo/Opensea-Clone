<SectionPlaylist
  title="THE BEST INTERNATIONAL HITS RIGHT NOW"
  header="Today's International hits"
  data={[
    {
      image: 'https://lh3.googleusercontent.com/BCKtQMIeJNAVxSo6yEOX1YVH500wI-Ug3dXtaK1CiPWTGJmR5cJPOqLLqWO0ptz9WzR1EGJrxiGY0lY=w544-h544-l90-rj',
      title: 'RELEASED',
      desc: 'Swedish House Mafia,..',
      onClick: () => { }
    },
    {
      image: 'https://lh3.googleusercontent.com/BCKtQMIeJNAVxSo6yEOX1YVH500wI-Ug3dXtaK1CiPWTGJmR5cJPOqLLqWO0ptz9WzR1EGJrxiGY0lY=w544-h544-l90-rj',
      title: 'RELEASED',
      desc: 'Swedish House Mafia,..',
      onClick: () => { }
    },
    {
      image: 'https://lh3.googleusercontent.com/BCKtQMIeJNAVxSo6yEOX1YVH500wI-Ug3dXtaK1CiPWTGJmR5cJPOqLLqWO0ptz9WzR1EGJrxiGY0lY=w544-h544-l90-rj',
      title: 'RELEASED',
      desc: 'Swedish Ho use Mafia,..',
      onClick: () => { }
    },
    
    ]}
/>

{
  props.data?.map((item, key) => {
    return (
      <PlaylistCard key={key} item={item} />
    )
  })
}
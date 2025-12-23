import Card from './components/Card'
import './index.css'
const App = () => {
  let users = [
    {
      "name": "Noah Thompson",
      "role": "Product Designer focused on simplicity & usability",
      "profilePhoto": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&h=300",
      "likes": "72.9K",
      "posts": "828",
      "views": "342.9K"
    },
    {
      "name": "Liam Carter",
      "role": "Product & UX Designer",
      "profilePhoto": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?fit=crop&w=800&h=300",
      "likes": "81.3K",
      "posts": "755",
      "views": "389.0K"
    },
    {
      "name": "Emma Johnson",
      "role": "Lead Product Designer",
      "profilePhoto": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1521790945508-bf2a36314e85?fit=crop&w=800&h=300",
      "likes": "64.7K",
      "posts": "699",
      "views": "310.2K"
    },
    {
      "name": "Olivia Smith",
      "role": "UI/UX & Interaction Designer",
      "profilePhoto": "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=800&h=300",
      "likes": "78.2K",
      "posts": "812",
      "views": "344.5K"
    },
    {
      "name": "Ethan Brown",
      "role": "Creative Product Designer",
      "profilePhoto": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&h=300",
      "likes": "69.9K",
      "posts": "778",
      "views": "321.9K"
    },
    {
      "name": "Ava Wilson",
      "role": "Interaction & Product Designer",
      "profilePhoto": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&h=300",
      "likes": "84.1K",
      "posts": "834",
      "views": "368.8K"
    },
    {
      "name": "Mason Davis",
      "role": "Minimalist Product Designer",
      "profilePhoto": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&h=300",
      "likes": "91.6K",
      "posts": "895",
      "views": "402.1K"
    },
    {
      "name": "Sophia Martinez",
      "role": "UX & Product Strategy",
      "profilePhoto": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?fit=crop&w=800&h=300",
      "likes": "76.4K",
      "posts": "802",
      "views": "350.7K"
    },
    {
      "name": "James Miller",
      "role": "Senior Product Designer",
      "profilePhoto": "https://images.unsplash.com/photo-1564564295391-7f24f26f568b?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=300",
      "likes": "88.9K",
      "posts": "860",
      "views": "377.3K"
    },
    {
      "name": "Isabella Garcia",
      "role": "Lead UX & Product Designer",
      "profilePhoto": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=faces&fit=crop&w=200&h=200",
      "coverPhoto": "https://images.unsplash.com/photo-1506765515384-028b60a970df?fit=crop&w=800&h=300",
      "likes": "93.5K",
      "posts": "910",
      "views": "418.0K"
    }
];






  return <div className='flex gap-2 w-full'>
    {users.map(function(elem){
      return <Card user={elem}/>
    })}
  </div>
}
export default App


import UserInfoBox from './UserInfoBox'


const UserInfoBoxes = () => {
    return ( 
        <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <UserInfoBox 
          heading='Browse Products'
          backgroundColor ='bg-gray-100'
          buttonInfo={{
            text: 'Browse Products',
            link: '/products',
            backgroundColor: 'bg-black'
          }}>Shop available products</UserInfoBox>
          <UserInfoBox 
          heading='Add a Product'
          backgroundColor ='bg-blue-100'
          buttonInfo={{
            text: 'Add a Product',
            link: '/products/add',
            backgroundColor: 'bg-black'
          }}
          >Add a Product</UserInfoBox>
        </div>
      </div>
    </section>
    );
}
 
export default UserInfoBoxes;
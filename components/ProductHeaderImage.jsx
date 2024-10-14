import Image from 'next/image'

const ProductHeaderImage  = ({ image }) => {
    return ( 
        <section>
      <div className="container-sm m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={image}
            alt=""
            className="object-cover h-[400px] w-full"
            width="800"
            height="200"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
     );
}
 
export default ProductHeaderImage;
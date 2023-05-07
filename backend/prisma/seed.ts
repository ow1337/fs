import { PrismaClient, UserRole } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash('password', 10)
  
  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      username: 'admin',
      email: 'admin@example.com',
      password,
      role: UserRole.ADMIN,
     // avatar: 'https://i.pravatar.cc/150?img=1',
      stores: {
        create: [{
          name: 'Admin Store',
          storeName: 'adminstore',
          description: 'This is an admin store',
          imageUrl: 'https://i.picsum.photos/id/1018/200/200.jpg?hmac=4O9UgzFApU-MwguljK1S_NhK6aI4WiaNlJD4iZ4Nz9c',
          products: {
            create: [{
              name: 'Admin Product',
              description: 'This is an admin product',
              price: 9.99,
              imageUrl: 'https://i.picsum.photos/id/1027/200/200.jpg?hmac=TlLRQl9X-QO_DKQcT1Iy0r-k28uO7VzFkC-ds7Vz1fs'
            }]
          }
        }]
      }
    }
  })

  const seller = await prisma.user.create({
    data: {
      name: 'Seller',
      username: 'seller',
      email: 'seller@example.com',
      password,
      role: UserRole.SELLER,
    //  avatar: 'https://i.pravatar.cc/150?img=2',
      stores: {
        create: [{
          name: 'Seller Store',
          storeName: 'sellerstore',
          description: 'This is a seller store',
          imageUrl: 'https://i.picsum.photos/id/1037/200/200.jpg?hmac=4CU1R4JpG_wdDjvthSak-UxQPTmyLqXJqwQ2vC8Wj-c',
          products: {
            create: [{
              name: 'Seller Product',
              description: 'This is a seller product',
              price: 4.99,
              imageUrl: 'https://i.picsum.photos/id/1024/200/200.jpg?hmac=nfyW0T8DZLOdyHzZTExbJfNt-jh25L0N6XsMpzPJYlE'
            }]
          }
        }]
      }
    }
  })

  const user = await prisma.user.create({
    data: {
      name: 'User',
      username: 'user',
      email: 'user@example.com',
      password,
      role: UserRole.USER,
   //   avatar: 'https://i.pravatar.cc/150?img=3',
     // balance: 100.0
    }
  })

  console.log({ admin, seller, user })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })

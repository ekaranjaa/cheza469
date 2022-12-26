import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export async function index() {
	return prisma.game.findMany({
		include: {
			children: true,
			Subscription: true
		}
	})
}

export async function store(data) {
	const resource = await prisma.game.create({
		data: {
			...data,
			isSubscription: data.isSubscription === 'true',
			price: parseInt(data.price)
		}
	})
	return {message: 'Game created', resource}
}

export async function show(id) {
	return prisma.game.findFirst({
		where: {id},
		include: {
			children: true,
			Subscription: true
		}
	})
}

export async function update(id, data) {
	const resource = await prisma.game.update({
		where: {id},
		data: {
			...data,
			isSubscription: data.isSubscription === 'true',
			price: parseInt(data.price)
		}
	})
	return {message: 'Game updated', resource}
}

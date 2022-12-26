import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export async function index() {
	return prisma.user.findMany({
		include: {
			Rank: true,
			Wallet: true,
			Subscription: true
		}
	})
}

export async function store(data) {
	const resource = await prisma.user.create({data})
	return {message: 'User created', resource}
}

export async function show(id) {
	return prisma.user.findFirst({
		where: {id},
		include: {
			Rank: true,
			Wallet: true,
			Subscription: true
		}
	})
}

export async function update(id, data) {
	const resource = await prisma.user.update({
		where: {id},
		data
	})
	return {message: 'User updated', resource}
}

export async function destroy(id) {
	const resource = await prisma.user.delete({
		where: {id}
	})
	return {message: 'User deleted', resource}
}

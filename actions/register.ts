"use server";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatedField = RegisterSchema.safeParse(values);

	if (!validatedField.success) {
		return { error: "Invalid fields!" };
	}

	const { email, password, name } = validatedField.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await getUserByEmail(email);

	if (existingUser) {
		return { error: "This user is already exist!" };
	}

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});

	const verificationToken = await generateVerificationToken(email);

	//TODO: send verification token email

	return { success: "Confirmation email sent!" };
};

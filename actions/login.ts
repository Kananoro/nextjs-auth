"use server";

import * as z from "zod";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedField = LoginSchema.safeParse(values);

	if (!validatedField.success) {
		return { error: "Invalid fields!" };
	}

	const { email, password } = validatedField.data;

	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Incorrect username or password." };
				default:
					return { error: "Something went wrong!" };
			}
		}
		throw error;
	}
};
export async function safeExit(code = 0) {
    await new Promise((r) => setTimeout(r, 20));

    process.exit(code);
}
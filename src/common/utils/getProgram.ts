import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { LeverageFunVaults } from "types/leverageFunVaults";

export async function getProgram(
  provider: anchor.Provider
): Promise<anchor.Program<LeverageFunVaults>> {
  try {
    const pid = new PublicKey("BoVHBNhA5X8fsqtHbvS6U1jygi6DXPrqVJKPCy6MJwLB");
    const idl = (await anchor.Program.fetchIdl(pid, provider))!;
    // @ts-ignore
    const program = new anchor.Program(
      idl,
      provider
    ) as anchor.Program<LeverageFunVaults>;
    return program;
  } catch (e) {
    throw new Error("Failed to load demo program. Was it deployed?");
  }
}

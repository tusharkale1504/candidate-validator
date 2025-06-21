import {
  createCandidate,
  getCandidateById,
  getAllCandidates,
  updateCandidate,
  deleteCandidate,
} from "../service/candidateService";
import { FastifyRequest, FastifyReply } from "fastify";
import { CandidateInterface } from "../interface/candidateInterface";
import { error } from "console";

export const createCandidateController = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const candidateData = req.body as CandidateInterface;
    const candidate = await createCandidate(candidateData);
    res.status(201).send(candidate);
  } catch (error) {
    res.status(500).send({ error: "Failed to create candidate" });
  }
};

export const getCandidateByIdController = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const { id } = req.params as { id: string };
    const candidate = await getCandidateById(id);

    if (!candidate)
      return res.status(404).send({ error: "Candidate not found" });
    res.send(candidate);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch candidate" });
  }
};

export const getAllCandidateController = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const candidate = await getAllCandidates();
    res.send(candidate);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch candidates" });
  }
};

export const updateCandidateController = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const { id } = req.params as { id: string };
    const data = req.body as Partial<CandidateInterface>;
    const candidate = await updateCandidate(id, data);

    if (!candidate)
      return res.status(404).send({ error: "Candidate not found" });
    res.send(candidate);
  } catch (error) {
    res.status(500).send({ error: "Failed to update candidates" });
  }
};

export const deleteCandidateController = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const { id } = req.params as { id: string };
    const deleted = await deleteCandidate(id);

    if (!deleted) return res.status(404).send({ error: "Candidate not found" });
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Failed to delete candidates" });
  }
};

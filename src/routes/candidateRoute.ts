import fastify, { FastifyInstance } from "fastify";
import {
  createCandidateController,
  getCandidateByIdController,
  getAllCandidateController,
  updateCandidateController,
  deleteCandidateController,
} from "../controllers/candidateController";

import {
  createCandidateSchema,
  updateCandidateSchema,
  candidateIdParamSchema,
} from "../schema/candidateSchema";

const candidateRoutes = async (fastify: FastifyInstance) => {
  fastify.post(
    "/candidate",
    { schema: createCandidateSchema },
    createCandidateController
  );

  fastify.get(
    "/candidate/:id",
    { schema: candidateIdParamSchema },
    getCandidateByIdController
  );

  fastify.get("/candidates", getAllCandidateController);

  fastify.put(
    "/candidate/:id",
    {
      schema: {
        ...candidateIdParamSchema,
        ...updateCandidateSchema,
      },
    },
    updateCandidateController
  );

  fastify.delete(
    "/candidate/:id",
    { schema: candidateIdParamSchema },
    deleteCandidateController
  );
};

export default candidateRoutes;

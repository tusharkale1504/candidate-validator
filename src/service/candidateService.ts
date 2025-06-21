import { CandidateInterface } from "../interface/candidateInterface";
import { Candidate } from "../models/candidateModel";

export const createCandidate = async (candidateData: CandidateInterface): Promise<Candidate> =>{
    return await Candidate.create({...candidateData});
};

export const getCandidateById = async (id:string): Promise<Candidate |null> =>{
    return await Candidate.findByPk(id)
};

export const getAllCandidates = async (): Promise<Candidate[]> =>{
    return await Candidate.findAll();
}


export const updateCandidate = async (id:string, data:Partial<CandidateInterface>): Promise<Candidate | null> =>{
    const candidate = await Candidate.findByPk(id);
    if(!candidate) return  null;
    await candidate.update(data);
    return candidate;
}

export const deleteCandidate = async (id:string): Promise<boolean> =>{
    const result = await Candidate.destroy({where : {id}});
    return result > 0
}
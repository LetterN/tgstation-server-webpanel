import { Components } from "./generatedcode/_generated";
import InternalError, { ErrorCode, GenericErrors } from "./models/InternalComms/InternalError";
import InternalStatus, { StatusCode } from "./models/InternalComms/InternalStatus";
import ServerClient from "./ServerClient";

export type listJobsErrors = GenericErrors;
export type getJobErrors = GenericErrors | ErrorCode.JOB_JOB_NOT_FOUND;
export type deleteJobErrors =
    | GenericErrors
    | ErrorCode.JOB_JOB_NOT_FOUND
    | ErrorCode.JOB_JOB_COMPLETE;

export default new (class JobsClient {
    public async listActiveJobs(
        instanceid: number
    ): Promise<InternalStatus<Components.Schemas.JobResponse[], listJobsErrors>> {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.JobController_Read({
                Instance: instanceid,
                page: 1,
                pageSize: 100
            });
        } catch (stat) {
            return new InternalStatus<Components.Schemas.JobResponse[], listJobsErrors>({
                code: StatusCode.ERROR,
                error: stat as InternalError<GenericErrors>
            });
        }

        switch (response.status) {
            case 200: {
                return new InternalStatus<Components.Schemas.JobResponse[], listJobsErrors>({
                    code: StatusCode.OK,
                    payload: (response.data as Components.Schemas.PaginatedJobResponse)!.content
                });
            }
            default: {
                return new InternalStatus<Components.Schemas.JobResponse[], listJobsErrors>({
                    code: StatusCode.ERROR,
                    error: new InternalError(
                        ErrorCode.UNHANDLED_RESPONSE,
                        { axiosResponse: response },
                        response
                    )
                });
            }
        }
    }

    public async getJob(
        instanceid: number,
        jobid: number
    ): Promise<InternalStatus<Components.Schemas.JobResponse, getJobErrors>> {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.JobController_GetId({
                Instance: instanceid,
                id: jobid
            });
        } catch (stat) {
            return new InternalStatus({
                code: StatusCode.ERROR,
                error: stat as InternalError<GenericErrors>
            });
        }

        switch (response.status) {
            case 200: {
                return new InternalStatus({
                    code: StatusCode.OK,
                    payload: response.data as Components.Schemas.JobResponse
                });
            }
            case 404: {
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(ErrorCode.JOB_JOB_NOT_FOUND, {
                        errorMessage: response.data as Components.Schemas.ErrorMessageResponse
                    })
                });
            }
            default: {
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(
                        ErrorCode.UNHANDLED_RESPONSE,
                        { axiosResponse: response },
                        response
                    )
                });
            }
        }
    }

    public async deleteJob(
        instanceid: number,
        jobid: number
    ): Promise<InternalStatus<Components.Schemas.JobResponse, deleteJobErrors>> {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.JobController_Delete({
                Instance: instanceid,
                id: jobid
            });
        } catch (stat) {
            return new InternalStatus({
                code: StatusCode.ERROR,
                error: stat as InternalError<GenericErrors>
            });
        }

        switch (response.status) {
            case 202: {
                return new InternalStatus({
                    code: StatusCode.OK,
                    payload: response.data as Components.Schemas.JobResponse
                });
            }
            case 404: {
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(ErrorCode.JOB_JOB_NOT_FOUND, {
                        errorMessage: response.data as Components.Schemas.ErrorMessageResponse
                    })
                });
            }
            case 410: {
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(ErrorCode.JOB_JOB_COMPLETE, {
                        void: true
                    })
                });
            }
            default: {
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(
                        ErrorCode.UNHANDLED_RESPONSE,
                        { axiosResponse: response },
                        response
                    )
                });
            }
        }
    }
})();

package cn.zzd.domain;

public class Contribution {

    private String id;
    private String authorId;
    private String submissionId;

    public Contribution() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public String getSubmissionId() {
        return submissionId;
    }

    public void setSubmissionId(String submissionId) {
        this.submissionId = submissionId;
    }

    public Contribution(String id, String authorId, String submissionId) {
        this.id = id;
        this.authorId = authorId;
        this.submissionId = submissionId;
    }
}

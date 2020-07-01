package cn.zzd.domain;

public class Submission {

    private String id;
    private String name_;
    private String content;
    private Integer state;

    public Submission(String id, String name_,String content, Integer state) {
        this.id = id;
        this.name_ = name_;
        this.content = content;
        this.state = state;
    }

    public Submission() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName_() {
        return name_;
    }

    public void setName_(String name_) {
        this.name_ = name_;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "Submission{" +
                "id='" + id + '\'' +
                ", name_='" + name_ + '\'' +
                ", content='" + content + '\'' +
                ", state=" + state +
                '}';
    }
}

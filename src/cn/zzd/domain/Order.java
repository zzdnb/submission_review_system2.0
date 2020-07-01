package cn.zzd.domain;

public class Order {
    private String id;
    private Integer state;
    private Integer payment;
    private Integer fee;
    private Integer charge;

    private String reviewer_id;
    private String submission_id;

    public Order(String id, Integer state, Integer payment, Integer fee, Integer charge, String reviewer_id, String submission_id) {
        this.id = id;
        this.state = state;
        this.payment = payment;
        this.fee = fee;
        this.charge = charge;
        this.reviewer_id = reviewer_id;
        this.submission_id = submission_id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Integer getPayment() {
        return payment;
    }

    public void setPayment(Integer payment) {
        this.payment = payment;
    }

    public Integer getFee() {
        return fee;
    }

    public Order() {
    }

    public void setFee(Integer fee) {
        this.fee = fee;
    }

    public Integer getCharge() {
        return charge;
    }

    public void setCharge(Integer charge) {
        this.charge = charge;
    }

    public String getReviewer_id() {
        return reviewer_id;
    }

    public void setReviewer_id(String reviewer_id) {
        this.reviewer_id = reviewer_id;
    }

    public String getSubmission_id() {
        return submission_id;
    }

    public void setSubmission_id(String submission_id) {
        this.submission_id = submission_id;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id='" + id + '\'' +
                ", state=" + state +
                ", fee=" + fee +
                ", charge=" + charge +
                ", reviewer_id='" + reviewer_id + '\'' +
                ", submission_id='" + submission_id + '\'' +
                '}';
    }
}

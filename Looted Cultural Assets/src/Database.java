public class Database implements Describable {
    private String datasetName;
    private String format;

    public Database(String datasetName, String format) {
        this.datasetName = datasetName;
        this.format = format;
    }

    public String getDatasetName() {
        return datasetName;
    }

    public String getFormat() {
        return format;
    }

    public void setDatasetName(String datasetName) {
        this.datasetName = datasetName;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    @Override
    public void displayDetails() {
        System.out.println("Database Details: Dataset Name: " + datasetName + ", Format: " + format);
    }

    @Override
    public String toString() {
        return "Database [datasetName=" + datasetName + ", format=" + format + "]";
    }
}

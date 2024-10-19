import java.util.ArrayList;

public class Controller {
    private CulturalAssetList assetList;
    private CulturalAssetUI assetUI;
    private int currentIndex = 0;

    public Controller() {
        assetList = new CulturalAssetList();
        assetList.addAsset(new CulturalAssetModel("The Rosetta Stone", "Egypt", "Museum"));
        assetList.addAsset(new CulturalAssetModel("The Elgin Marbles", "Greece", "Display"));
        assetUI = new CulturalAssetUI(this);
        updateView();
    }

    public void showView() {
        assetUI.setVisible(true);
    }

    public void updateView() {
        assetUI.displayAsset(assetList.getAsset(currentIndex));
    }

    public void previousAsset() {
        if (currentIndex > 0) {
            currentIndex--;
            updateView();
        }
    }

    public void nextAsset() {
        if (currentIndex < assetList.size() - 1) {
            currentIndex++;
            updateView();
        }
    }

    public void addAsset(CulturalAssetModel asset) {
        assetList.addAsset(asset);
        currentIndex = assetList.size() - 1;
        updateView();
    }

    public void updateAsset(CulturalAssetModel updatedAsset) {
        assetList.updateAsset(currentIndex, updatedAsset);
        updateView();
    }

    public void deleteAsset() {
        assetList.removeAsset(currentIndex);
        if (currentIndex > 0) currentIndex--;
        updateView();
    }

    public void quitApplication() {
        System.exit(0);
    }
}

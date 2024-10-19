import java.util.ArrayList;

public class CulturalAssetList {
    private ArrayList<CulturalAssetModel> assets;

    public CulturalAssetList() {
        assets = new ArrayList<>();
    }

    public void addAsset(CulturalAssetModel asset) {
        assets.add(asset);
    }

    public void updateAsset(int index, CulturalAssetModel asset) {
        assets.set(index, asset);
    }

    public void removeAsset(int index) {
        assets.remove(index);
    }

    public CulturalAssetModel getAsset(int index) {
        return assets.get(index);
    }

    public int size() {
        return assets.size();
    }
}

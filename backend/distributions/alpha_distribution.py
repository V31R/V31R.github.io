import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class AlphaDistribution(DistributionTemplate):
    def __init__(self):
        super(AlphaDistribution, self).__init__('Альфа распределение')

    def calculate(self, data: pd.Series) -> None:
        a = 3.57
        self.distribution = np.linspace(stats.alpha.ppf(0.01, a) * data.min(), stats.alpha.ppf(0.99, a) * data.max(), len(data))
        self.__mse__(data)